const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const pdfDir = path.join(__dirname, 'public', 'pdfs');
const imgDir = path.join(__dirname, 'public', 'images');

function cleanFilename(filename) {
  let name = filename.replace(/\.pdf$/i, '');
  name = name.replace(/_/g, '-')
             .replace(/'/g, '-')
             .replace(/\s+/g, '-')
             .replace(/\.\.\./g, '-')
             .replace(/-+/g, '-');

  return name
    .toLowerCase()
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

function extractFirstPage(pdfPath, outputPath) {
  // Méthode de secours 1 : sips sans spécifier la page (va prendre la page 1 par défaut sur bcp de versions de Mac)
  try {
    execSync(`sips -s format jpeg "${pdfPath}" --out "${outputPath}"`, { timeout: 8000 });
    if (fs.existsSync(outputPath)) return;
  } catch (e) {}

  // Méthode de secours 2 : AppleScript / Python natif Mac pour forcer la première page
  try {
    const script = `
import sys
from Foundation import NSURL
from Quartz import PDFDocument, kUTTypeJPEG

pdf_url = NSURL.fileURLWithPath_("${pdfPath}")
doc = PDFDocument.alloc().initWithURL_(pdf_url)
if doc:
    page = doc.pageAtIndex_(0)
    image = page.thumbnailOfSize_forBox_((1024, 1024), 1)
    if image:
        image_data = image.TIFFRepresentation()
        image_data.writeToFile_atomically_("${outputPath.replace('.jpg', '.tiff')}", True)
    `;
    fs.writeFileSync('extract.py', script);
    execSync(`python3 extract.py && sips -s format jpeg "${outputPath.replace('.jpg', '.tiff')}" --out "${outputPath}" && rm -f "${outputPath.replace('.jpg', '.tiff')}" extract.py`, { stdio: 'ignore' });
    if (fs.existsSync(outputPath)) return;
  } catch (e) {}

  // Si on arrive ici, c'est que rien n'a marché pour l'extraction
  throw new Error("L'extraction graphique a échoué. Le PDF est peut-être un scan lourd ou protégé.");
}

async function processFiles() {
  if (!fs.existsSync(pdfDir)) {
    console.error(`❌ Le dossier ${pdfDir} n'existe pas.`);
    return;
  }
  if (!fs.existsSync(imgDir)) {
    fs.mkdirSync(imgDir, { recursive: true });
  }

  const files = fs.readdirSync(pdfDir).filter(file => file.endsWith('.pdf'));

  console.log(`🚀 [START] Génération des vraies couvertures pour ${files.length} fichiers...\n`);

  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    const oldPath = path.join(pdfDir, file);
    const slugName = cleanFilename(file);
    const newPdfName = `${slugName}.pdf`;
    const newPdfPath = path.join(pdfDir, newPdfName);
    const finalOutputPath = path.join(imgDir, `${slugName}.jpg`);

    console.log(`⏳ [${i + 1}/${files.length}] Traitement de : "${file}"...`);

    try {
      extractFirstPage(oldPath, finalOutputPath);
      
      if (fs.existsSync(finalOutputPath)) {
        console.log(`   📸 Couverture REELLEMENT générée dans public/images/ !`);
      } else {
        console.log(`   ❌ Échec : Le fichier image n'a pas pu être créé.`);
      }

      if (oldPath !== newPdfPath) {
        fs.renameSync(oldPath, newPdfPath);
        console.log(`   ✍️  Fichier renommé en -> ${newPdfName}`);
      }
      console.log(`   ✅ Fait.\n`);

    } catch (error) {
      console.error(`   ⚠️  Attention : ${error.message}\n`);
      // On tente quand même de renommer le PDF même si l'image a foiré
      if (oldPath !== newPdfPath && fs.existsSync(oldPath)) {
        fs.renameSync(oldPath, newPdfPath);
      }
    }
  }

  console.log('🎉 Script terminé.');
}

processFiles();

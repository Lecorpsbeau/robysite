const fs = require('fs');
const path = require('path');
const pdfPoppler = require('pdf-poppler');

// Chemins des dossiers de ton projet Next.js
const pdfDir = path.join(__dirname, 'public', 'pdfs');
const imgDir = path.join(__dirname, 'public', 'images');

// Fonction pour nettoyer et simplifier les noms de fichiers
function cleanFilename(filename) {
  let name = filename.replace(/\.pdf$/i, '');
  name = name.replace(/\.\.\./g, '-')
             .replace(/_\(1\)/g, '')
             .replace(/\( PDFDrive \)/gi, '')
             .replace(/_Z-Library.*/gi, '');

  return name
    .toLowerCase()
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
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

  console.log(`🚀 Traitement de ${files.length} fichiers PDF via Poppler...\n`);

  for (const file of files) {
    const oldPath = path.join(pdfDir, file);
    const slugName = cleanFilename(file);
    const newPdfName = `${slugName}.pdf`;
    const newPdfPath = path.join(pdfDir, newPdfName);

    console.log(`📖 Traitement de : "${file}"`);

    // Configuration pour pdf-poppler
    let opts = {
      format: 'jpeg',
      out_dir: imgDir,
      out_prefix: slugName,
      page: 1 // On extrait uniquement la première page
    };

    try {
      // 1. Conversion de la première page en image
      await pdfPoppler.convert(oldPath, opts);
      
      // pdf-poppler nomme le fichier "prefixe-1.jpg", on le renomme proprement en "prefixe.jpg"
      const nativeOutputPath = path.join(imgDir, `${slugName}-1.jpg`);
      const finalOutputPath = path.join(imgDir, `${slugName}.jpg`);
      
      if (fs.existsSync(nativeOutputPath)) {
        fs.renameSync(nativeOutputPath, finalOutputPath);
        console.log(`   📸 Couverture générée -> public/images/${slugName}.jpg`);
      }

      // 2. Renommer le fichier PDF proprement
      if (oldPath !== newPdfPath) {
        fs.renameSync(oldPath, newPdfPath);
        console.log(`   ✍️  Fichier renommé -> public/pdfs/${newPdfName}`);
      }

      console.log(`   ✅ Terminé.\n`);

    } catch (error) {
      console.error(`   ❌ Erreur sur le fichier ${file}:`, error.message);
    }
  }

  console.log('🎉 Terminé ! Tout ton catalogue est propre et synchronisé.');
}

processFiles();
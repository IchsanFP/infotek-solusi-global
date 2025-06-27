

export const convertToBase64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onloadend = () => {
      if (typeof reader.result === 'string') {
        resolve(reader.result);
      }else{
        reject(new Error('FileReader did not return a string'))
      }
    };

    reader.onerror = () => reject(new Error('Error reading file.'));
    reader.readAsDataURL(file);
  })
}
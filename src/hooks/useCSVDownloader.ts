// useCSVDownloader — helper to download CSV client-side
// TODO: convert arrays to CSV and trigger browser download
export const useCSVDownloader = () => {
  const download = (filename: string, csv: string) => {
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url; a.download = filename; a.click();
    URL.revokeObjectURL(url);
  };
  return { download } as any;
};

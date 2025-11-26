/**
 * IPFSUploader component
 * Upload files to IPFS and get CID
 */

import React, { useState, useRef } from 'react';
import { Button, Card } from '@/components/primitives';
import { useToast } from '@/hooks';
import { uploadFileToIPFS } from '@/services/ipfsService';
import { formatFileSize } from '@/utils/format';

interface IPFSUploaderProps {
  onUpload?: (cid: string, gateway: string) => void;
  accept?: string;
  maxSize?: number; // in bytes
}

/**
 * IPFSUploader component
 * Handles file uploads to IPFS
 *
 * TODO: Integrate with real IPFS service (NFT.storage, Pinata, etc.)
 */
export const IPFSUploader: React.FC<IPFSUploaderProps> = ({
  onUpload,
  accept = 'image/*',
  maxSize = 10 * 1024 * 1024, // 10MB default
}) => {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);
  const [cid, setCid] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { success, error: showError } = useToast();

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (!selectedFile) return;

    // Validate file size
    if (selectedFile.size > maxSize) {
      showError(`File too large. Max size: ${formatFileSize(maxSize)}`);
      return;
    }

    setFile(selectedFile);

    // Create preview
    const reader = new FileReader();
    reader.onload = (event) => {
      setPreview(event.target?.result as string);
    };
    reader.readAsDataURL(selectedFile);
  };

  const handleUpload = async () => {
    if (!file) {
      showError('Please select a file first');
      return;
    }

    try {
      setUploading(true);

      // TODO: Integrate with real IPFS service
      const { cid: uploadedCid, gateway } = await uploadFileToIPFS(file);
      setCid(uploadedCid);
      success(`File uploaded! CID: ${uploadedCid}`);

      if (onUpload) {
        onUpload(uploadedCid, gateway);
      }
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Upload failed';
      showError(message);
    } finally {
      setUploading(false);
    }
  };

  const handleReset = () => {
    setFile(null);
    setPreview(null);
    setCid(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <Card
      header={<h3 className="text-lg font-semibold">Upload to IPFS</h3>}
    >
      <div className="space-y-4">
        {/* File Input */}
        {!cid && (
          <>
            <div
              onClick={() => fileInputRef.current?.click()}
              className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center cursor-pointer hover:border-algorand-500 transition-colors"
            >
              <input
                ref={fileInputRef}
                type="file"
                accept={accept}
                onChange={handleFileSelect}
                className="hidden"
              />
              {preview ? (
                <div className="space-y-2">
                  <img
                    src={preview}
                    alt="preview"
                    className="w-32 h-32 object-cover rounded mx-auto"
                  />
                  <p className="text-sm text-gray-600">{file?.name}</p>
                  <p className="text-xs text-gray-500">
                    {formatFileSize(file?.size || 0)}
                  </p>
                </div>
              ) : (
                <div>
                  <p className="text-lg font-semibold text-gray-700">
                    Click to upload or drag and drop
                  </p>
                  <p className="text-sm text-gray-500 mt-1">
                    Max size: {formatFileSize(maxSize)}
                  </p>
                </div>
              )}
            </div>

            {/* Upload Button */}
            {file && (
              <div className="flex gap-2">
                <Button
                  onClick={handleUpload}
                  isLoading={uploading}
                  fullWidth
                  disabled={uploading}
                >
                  Upload
                </Button>
                <Button
                  onClick={handleReset}
                  variant="outline"
                  fullWidth
                  disabled={uploading}
                >
                  Clear
                </Button>
              </div>
            )}
          </>
        )}

        {/* Success State */}
        {cid && (
          <div className="space-y-3">
            <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
              <p className="text-sm font-semibold text-green-800">Upload Successful!</p>
              <p className="font-mono text-xs mt-2 break-all text-gray-600">
                {cid}
              </p>
            </div>
            <Button
              onClick={handleReset}
              variant="secondary"
              fullWidth
            >
              Upload Another File
            </Button>
          </div>
        )}
      </div>
    </Card>
  );
};

IPFSUploader.displayName = 'IPFSUploader';

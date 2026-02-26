"use client";

import { useState } from "react";
import { Upload } from "lucide-react";
import toast from "react-hot-toast";

interface ImageUploadProps {
  onUploadComplete: (url: string) => void;
  folder?: string;
}

export default function ImageUpload({ onUploadComplete, folder = "products" }: ImageUploadProps) {
  const [uploading, setUploading] = useState(false);
  const [preview, setPreview] = useState<string>("");

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate file type
    if (!file.type.startsWith('image/')) {
      toast.error('Please upload an image file');
      return;
    }

    // Validate file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      toast.error('Image size should be less than 5MB');
      return;
    }

    setUploading(true);
    const formData = new FormData();
    formData.append('file', file);
    formData.append('folder', folder);

    try {
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setPreview(data.url);
        onUploadComplete(data.url);
        toast.success('Image uploaded successfully!');
      } else {
        toast.error('Upload failed');
      }
    } catch (error) {
      toast.error('Upload failed');
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="space-y-4">
      <label className="block">
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center cursor-pointer hover:border-primary transition">
          {preview ? (
            <img src={preview} alt="Preview" className="max-h-48 mx-auto rounded" />
          ) : (
            <div>
              <Upload className="w-12 h-12 mx-auto text-gray-400 mb-2" />
              <p className="text-gray-600">Click to upload image</p>
              <p className="text-xs text-gray-400 mt-1">PNG, JPG, WEBP (max 5MB)</p>
            </div>
          )}
        </div>
        <input
          type="file"
          accept="image/*"
          onChange={handleUpload}
          disabled={uploading}
          className="hidden"
        />
      </label>
      {uploading && <p className="text-sm text-gray-600">Uploading...</p>}
    </div>
  );
}

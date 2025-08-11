// 'use client';  It is not neccessary to make a client cuz it's been imported to contact-form which is already a client component
import { useEffect } from 'react';

type SuccessModalProps = {
  onClose: () => void;
};

export default function SuccessModal({ onClose }: SuccessModalProps) {
  useEffect(() => {
    const timeOut = setTimeout(() => {
      onClose();
    }, 5000);

    return () => clearTimeout(timeOut);
  }, [onClose]);

  return (
    <div className="fixed inset-0 bg-black/30 backdrop:blur-sm flex items-center justify-center">
      <div className="absolute top-24 bg-white text-green-600 font-medium rounded-xl shadow-lg px-4 py-2 transition z-50">
        <p>Message sent successfully!</p>
      </div>
    </div>
  );
}

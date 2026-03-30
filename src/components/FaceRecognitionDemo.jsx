import { useState, useRef } from "react";
import {
  Upload,
  X,
  Scan,
  User,
  Percent,
  Activity,
  Github,
  AlertCircle,
} from "lucide-react";

// Mock results - replace with real API call later
const mockResults = [
  {
    name: "Robert Downey Jr.",
    confidence: 94.7,
    similarity: 72.3,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Robert_Downey_Jr_2014_Comic_Con_%28cropped%29.jpg/220px-Robert_Downey_Jr_2014_Comic_Con_%28cropped%29.jpg",
  },
  {
    name: "Chris Evans",
    confidence: 89.2,
    similarity: 68.1,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/ChrisEvans2023.jpg/220px-ChrisEvans2023.jpg",
  },
  {
    name: "Tom Holland",
    confidence: 87.5,
    similarity: 65.8,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Tom_Holland_by_Gage_Skidmore.jpg/220px-Tom_Holland_by_Gage_Skidmore.jpg",
  },
  {
    name: "Scarlett Johansson",
    confidence: 96.1,
    similarity: 74.7,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Scarlett_Johansson_by_Gage_Skidmore_2_%28cropped%29.jpg/220px-Scarlett_Johansson_by_Gage_Skidmore_2_%28cropped%29.jpg",
  },
  {
    name: "Chris Hemsworth",
    confidence: 91.3,
    similarity: 70.2,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Chris_Hemsworth_by_Gage_Skidmore_2_%28cropped%29.jpg/220px-Chris_Hemsworth_by_Gage_Skidmore_2_%28cropped%29.jpg",
  },
];

export default function FaceRecognitionDemo() {
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const fileInputRef = useRef(null);

  const handleImageUpload = (file) => {
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      setError("Please upload an image file");
      return;
    }

    setError(null);
    setResult(null);
    setImage(file);

    const reader = new FileReader();
    reader.onload = (e) => setImagePreview(e.target.result);
    reader.readAsDataURL(file);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    handleImageUpload(file);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const processImage = async () => {
    setIsProcessing(true);
    setError(null);

    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 2000));

    /* 
    // TODO: Replace with real API call when deployed
    try {
      const formData = new FormData()
      formData.append('image', image)
      
      const response = await fetch('YOUR_API_ENDPOINT/predict', {
        method: 'POST',
        body: formData,
      })
      
      const data = await response.json()
      setResult(data)
    } catch (err) {
      setError('Failed to process image. Please try again.')
    }
    */

    // Mock result - random celebrity
    const randomResult =
      mockResults[Math.floor(Math.random() * mockResults.length)];
    setResult(randomResult);
    setIsProcessing(false);
  };

  const reset = () => {
    setImage(null);
    setImagePreview(null);
    setResult(null);
    setError(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Header */}
      <div className="text-center mb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-medium mb-3">
          <Activity className="w-3 h-3" />
          Live Demo
        </div>
        <h3 className="text-xl font-semibold text-white mb-2">
          Try Face Recognition
        </h3>
        <p className="text-slate-400 text-sm">
          Upload a celebrity photo to see the AI identify them
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Upload Section */}
        <div className="space-y-4">
          {!imagePreview ? (
            <div
              onDrop={handleDrop}
              onDragOver={handleDragOver}
              onClick={() => fileInputRef.current?.click()}
              className="aspect-square rounded-2xl border-2 border-dashed border-slate-700 hover:border-accent/50 bg-dark-light/50 flex flex-col items-center justify-center cursor-pointer transition-all hover:bg-dark-light"
            >
              <Upload className="w-10 h-10 text-slate-500 mb-3" />
              <p className="text-slate-400 text-sm font-medium">
                Drop an image here
              </p>
              <p className="text-slate-500 text-xs mt-1">or click to browse</p>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={(e) => handleImageUpload(e.target.files[0])}
                className="hidden"
              />
            </div>
          ) : (
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-dark-light">
              <img
                src={imagePreview}
                alt="Uploaded"
                className="w-full h-full object-cover"
              />
              {isProcessing && (
                <div className="absolute inset-0 bg-dark/80 flex items-center justify-center">
                  <div className="text-center">
                    <div className="relative w-16 h-16 mx-auto mb-3">
                      <Scan className="w-16 h-16 text-accent animate-pulse" />
                      <div className="absolute inset-0 border-2 border-accent/50 rounded-lg animate-ping" />
                    </div>
                    <p className="text-white text-sm font-medium">
                      Analyzing face...
                    </p>
                    <p className="text-slate-400 text-xs mt-1">
                      Running ArcFace + CNN
                    </p>
                  </div>
                </div>
              )}
              <button
                onClick={reset}
                className="absolute top-3 right-3 p-2 rounded-full bg-dark/80 hover:bg-dark text-white transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          )}

          {imagePreview && !isProcessing && !result && (
            <button onClick={processImage} className="w-full btn btn-primary">
              <Scan className="w-4 h-4" />
              Identify Face
            </button>
          )}

          {error && (
            <div className="flex items-center gap-2 p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
              <AlertCircle className="w-4 h-4 flex-shrink-0" />
              {error}
            </div>
          )}
        </div>

        {/* Results Section */}
        <div className="space-y-4">
          {result ? (
            <>
              {/* Match Card */}
              <div className="p-4 rounded-2xl bg-dark-light border border-slate-800">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-xl overflow-hidden bg-dark">
                    <img
                      src={result.image}
                      alt={result.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-wider">
                      Match Found
                    </p>
                    <p className="text-xl font-semibold text-white">
                      {result.name}
                    </p>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 rounded-xl bg-dark">
                    <div className="flex items-center gap-2 text-slate-400 text-xs mb-1">
                      <Percent className="w-3 h-3" />
                      Softmax Confidence
                    </div>
                    <p className="text-2xl font-bold text-green-400">
                      {result.confidence}%
                    </p>
                  </div>
                  <div className="p-3 rounded-xl bg-dark">
                    <div className="flex items-center gap-2 text-slate-400 text-xs mb-1">
                      <Activity className="w-3 h-3" />
                      Cosine Similarity
                    </div>
                    <p className="text-2xl font-bold text-accent">
                      {result.similarity}%
                    </p>
                  </div>
                </div>
              </div>

              {/* Tech Stack */}
              <div className="p-4 rounded-2xl bg-dark-light/50 border border-slate-800">
                <p className="text-xs text-slate-500 uppercase tracking-wider mb-2">
                  Powered By
                </p>
                <div className="flex flex-wrap gap-2">
                  {["ArcFace", "CNN", "TensorFlow", "FastAPI"].map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 rounded-md bg-dark text-slate-300 text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Try Again */}
              <button onClick={reset} className="w-full btn btn-secondary">
                Try Another Image
              </button>
            </>
          ) : (
            <div className="h-full flex flex-col items-center justify-center text-center p-6 rounded-2xl bg-dark-light/30 border border-slate-800/50">
              <User className="w-12 h-12 text-slate-600 mb-3" />
              <p className="text-slate-400 text-sm">
                Upload an image to see the face recognition in action
              </p>
              <div className="mt-4 flex flex-wrap justify-center gap-2">
                <span className="px-2 py-1 rounded bg-dark text-slate-500 text-xs">
                  100% confidence
                </span>
                <span className="px-2 py-1 rounded bg-dark text-slate-500 text-xs">
                  74.7% similarity
                </span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Demo Mode Notice */}
      <div className="mt-6 p-4 rounded-xl bg-amber-500/10 border border-amber-500/20">
        <p className="text-amber-400 text-sm font-medium text-center mb-1">
          🎭 Demo Mode — Simulated Results
        </p>
        <p className="text-slate-400 text-xs text-center">
          This is a UI preview. The real model achieves 100% softmax confidence
          & 74.7% cosine similarity.
          <a
            href="https://github.com/NeelJacob/Hybrid-celebrity-face-recognition"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline ml-1"
          >
            View real project on GitHub →
          </a>
        </p>
      </div>
    </div>
  );
}

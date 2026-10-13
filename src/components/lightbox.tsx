"use client";

import React, { useEffect, useState, useRef, useCallback } from "react";
import {
  XMarkIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  MagnifyingGlassPlusIcon,
  MagnifyingGlassMinusIcon,
  ArrowPathIcon,
  ArrowsPointingOutIcon,
} from "@heroicons/react/24/solid";
import { getImagePrefix } from "../../utils/utils";

export interface LightboxImage {
  src: string;
  caption?: string;
  category?: string;
}

interface LightboxProps {
  isOpen: boolean;
  onClose: () => void;
  images: LightboxImage[];
  currentIndex: number;
  onNavigate: (index: number) => void;
}

export function Lightbox({
  isOpen,
  onClose,
  images,
  currentIndex,
  onNavigate,
}: LightboxProps) {
  const [zoomLevel, setZoomLevel] = useState<number>(1.0);
  const [pan, setPan] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const dragStartRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const stageRef = useRef<HTMLDivElement>(null);

  // Reset zoom & pan when image changes or closes
  const resetZoom = useCallback(() => {
    setZoomLevel(1.0);
    setPan({ x: 0, y: 0 });
  }, []);

  useEffect(() => {
    resetZoom();
  }, [currentIndex, isOpen, resetZoom]);

  const zoomIn = () => {
    setZoomLevel((prev) => Math.min(4.0, Number((prev + 0.35).toFixed(2))));
  };

  const zoomOut = () => {
    setZoomLevel((prev) => {
      const next = Math.max(1.0, Number((prev - 0.35).toFixed(2)));
      if (next <= 1.0) setPan({ x: 0, y: 0 });
      return next;
    });
  };

  const toggleMaxZoom = () => {
    if (zoomLevel > 1.2) {
      resetZoom();
    } else {
      setZoomLevel(2.2);
      setPan({ x: 0, y: 0 });
    }
  };

  // Keyboard navigation & zoom shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") {
        onNavigate((currentIndex - 1 + images.length) % images.length);
      }
      if (e.key === "ArrowRight") {
        onNavigate((currentIndex + 1) % images.length);
      }
      if (e.key === "+" || e.key === "=") zoomIn();
      if (e.key === "-" || e.key === "_") zoomOut();
      if (e.key === "0") resetZoom();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, currentIndex, images.length, onClose, onNavigate, resetZoom]);

  // Mouse wheel zoom
  useEffect(() => {
    const stage = stageRef.current;
    if (!stage || !isOpen) return;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      if (e.deltaY < 0) {
        setZoomLevel((prev) => Math.min(4.0, Number((prev + 0.3).toFixed(2))));
      } else {
        setZoomLevel((prev) => {
          const next = Math.max(1.0, Number((prev - 0.3).toFixed(2)));
          if (next <= 1.0) setPan({ x: 0, y: 0 });
          return next;
        });
      }
    };

    stage.addEventListener("wheel", handleWheel, { passive: false });
    return () => stage.removeEventListener("wheel", handleWheel);
  }, [isOpen]);

  if (!isOpen || images.length === 0) return null;

  const currentImg = images[currentIndex];
  const imgSrc = currentImg.src.startsWith("http")
    ? currentImg.src
    : `${getImagePrefix()}${currentImg.src.startsWith("/") ? currentImg.src.slice(1) : currentImg.src}`;

  // Mouse drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    if (zoomLevel <= 1.05) return;
    setIsDragging(true);
    dragStartRef.current = { x: e.clientX - pan.x, y: e.clientY - pan.y };
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || zoomLevel <= 1.05) return;
    setPan({
      x: e.clientX - dragStartRef.current.x,
      y: e.clientY - dragStartRef.current.y,
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/95 backdrop-blur-md select-none overflow-hidden transition-opacity animate-fadeIn"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      {/* Top Header Bar: Badge & Zoom Toolbar & Close */}
      <div
        className="absolute top-0 inset-x-0 z-50 flex items-center justify-between p-3.5 sm:p-5 bg-gradient-to-b from-black/90 via-black/50 to-transparent pointer-events-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Left Category Badge & Image Counter */}
        <div className="flex items-center gap-2.5">
          {currentImg.category && (
            <span className="inline-block rounded-full bg-orange-500/20 border border-orange-500/40 px-3 py-1 text-xs font-bold text-orange-400 shadow-sm">
              {currentImg.category}
            </span>
          )}
          <span className="text-xs text-zinc-400 font-mono hidden sm:inline">
            รูปภาพ {currentIndex + 1} จาก {images.length}
          </span>
        </div>

        {/* Center Zoom Controls Toolbar */}
        <div className="flex items-center gap-1 sm:gap-2 bg-zinc-950/90 border border-zinc-700/80 rounded-full px-3 py-1.5 shadow-2xl backdrop-blur-md">
          <button
            onClick={zoomOut}
            title="ซูมออก (-)"
            className="p-1.5 rounded-full text-zinc-300 hover:text-white hover:bg-zinc-800 transition-colors cursor-pointer"
          >
            <MagnifyingGlassMinusIcon className="w-4 h-4 sm:w-5 sm:h-5 text-orange-400" />
          </button>

          <button
            onClick={resetZoom}
            title="คลิกเพื่อรีเซ็ต 100%"
            className="px-2 py-0.5 min-w-[50px] text-center text-xs font-mono font-bold text-orange-400 hover:text-orange-300 hover:bg-zinc-800 rounded transition-colors cursor-pointer"
          >
            {Math.round(zoomLevel * 100)}%
          </button>

          <button
            onClick={zoomIn}
            title="ซูมเข้า (+)"
            className="p-1.5 rounded-full text-zinc-300 hover:text-white hover:bg-zinc-800 transition-colors cursor-pointer"
          >
            <MagnifyingGlassPlusIcon className="w-4 h-4 sm:w-5 sm:h-5 text-orange-400" />
          </button>

          <div className="w-px h-4 bg-zinc-700 mx-0.5" />

          <button
            onClick={resetZoom}
            title="รีเซ็ตขนาดปกติ (100%)"
            className="p-1.5 rounded-full text-zinc-400 hover:text-orange-400 hover:bg-zinc-800 transition-colors cursor-pointer"
          >
            <ArrowPathIcon className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>

          <button
            onClick={toggleMaxZoom}
            title="สลับซูม 2x (หรือดับเบิ้ลคลิกที่รูป)"
            className="p-1.5 rounded-full text-zinc-400 hover:text-orange-400 hover:bg-zinc-800 transition-colors cursor-pointer"
          >
            <ArrowsPointingOutIcon className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close"
          className="rounded-full bg-zinc-900/90 border border-zinc-700 p-2 sm:p-2.5 text-zinc-300 hover:text-white hover:border-orange-500 hover:bg-zinc-800 transition-colors cursor-pointer"
        >
          <XMarkIcon className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
      </div>

      {/* Prev button */}
      {images.length > 1 && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNavigate((currentIndex - 1 + images.length) % images.length);
          }}
          aria-label="Previous image"
          className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 z-50 rounded-full bg-zinc-950/80 border border-zinc-700/80 p-3 text-zinc-300 hover:text-white hover:border-orange-500 hover:bg-zinc-900 transition-all cursor-pointer shadow-xl"
        >
          <ChevronLeftIcon className="h-6 w-6" />
        </button>
      )}

      {/* Next button */}
      {images.length > 1 && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNavigate((currentIndex + 1) % images.length);
          }}
          aria-label="Next image"
          className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 z-50 rounded-full bg-zinc-950/80 border border-zinc-700/80 p-3 text-zinc-300 hover:text-white hover:border-orange-500 hover:bg-zinc-900 transition-all cursor-pointer shadow-xl"
        >
          <ChevronRightIcon className="h-6 w-6" />
        </button>
      )}

      {/* Center Zoomable & Draggable Stage */}
      <div
        ref={stageRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        className={`relative w-full h-[76vh] flex items-center justify-center overflow-hidden ${
          zoomLevel > 1.05
            ? isDragging
              ? "cursor-grabbing"
              : "cursor-grab"
            : "cursor-zoom-in"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={imgSrc}
          alt={currentImg.caption || "Portfolio preview"}
          onDoubleClick={toggleMaxZoom}
          draggable={false}
          style={{
            transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoomLevel})`,
            transition: isDragging ? "none" : "transform 0.18s cubic-bezier(0.2, 0, 0, 1)",
          }}
          className="max-h-[72vh] max-w-[85vw] object-contain select-none will-change-transform shadow-2xl rounded-lg"
        />
      </div>

      {/* Bottom Caption & Hints */}
      <div className="absolute bottom-3 inset-x-0 z-40 flex flex-col items-center text-center px-4 pointer-events-none">
        {currentImg.caption && (
          <p className="text-sm md:text-base font-semibold text-white drop-shadow-md max-w-2xl bg-black/70 px-4 py-1.5 rounded-full backdrop-blur-sm border border-zinc-800">
            {currentImg.caption}
          </p>
        )}
        <div className="mt-1.5 flex items-center gap-3 text-[11px] text-zinc-400 bg-black/50 px-3 py-0.5 rounded-full">
          <span>🔍 ซูมเข้า/ออก: ใช้ปุ่ม +/- หรือหมุนลูกกลิ้งเมาส์ (Scroll Wheel)</span>
          <span className="hidden sm:inline">&bull; ดับเบิ้ลคลิกเพื่อซูม 2x</span>
          <span className="hidden sm:inline">&bull; ลากเมาส์ (Drag) เพื่อเลื่อนดูส่วนต่างๆ</span>
        </div>
      </div>
    </div>
  );
}

export default Lightbox;

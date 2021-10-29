import { SiReact } from 'react-icons/si';
import { SiTailwindcss } from 'react-icons/si';

export const CreditBox = () => (
  <address className="font-mono not-italic text-gray-200 bg-black bg-opacity-60 rounded px-2">
    Created with
    <SiReact className="inline-block ml-1 bg-black text-cyan-400" />
    <SiTailwindcss className="inline-block mr-1 text-cyan-500" />
    by
    <a href="https://github.com/harmonify" className="inline mx-1 underline" rel="author">Wendy</a>
  </address>
);

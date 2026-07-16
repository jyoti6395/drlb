import { useState, ReactNode } from "react";
import { ARTICLES } from "../data";
import { Article } from "../types";
import { Search, BookOpen, Calendar, Clock, User, ArrowLeft, Printer, ShieldAlert, FileText, CheckCircle } from "lucide-react";

export default function ResourcesView() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [readingArticleId, setReadingArticleId] = useState<string | null>(null);
  const [isPrintedAlert, setIsPrintedAlert] = useState(false);

  const categories = ["all", "Ocular Immunology", "Advanced Immunology", "Drug Allergy"];

  const filteredArticles = ARTICLES.filter((article) => {
    const matchesSearch =
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.content.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory =
      selectedCategory === "all" || article.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const handlePrint = () => {
    setIsPrintedAlert(true);
    setTimeout(() => setIsPrintedAlert(false), 4000);
    window.print();
  };

  const activeArticle = ARTICLES.find((a) => a.id === readingArticleId);

  // If reading an article, show the full reader layout
  if (activeArticle) {
    return (
      <div className="bg-slate-50 min-h-screen py-12 font-sans">
        <div className="max-w-4xl mx-auto px-4">
          {/* Back button */}
          <button
            onClick={() => setReadingArticleId(null)}
            className="flex items-center gap-2 text-slate-600 hover:text-dominant-green font-semibold text-xs mb-8 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Education Center</span>
          </button>

          {/* Article Card Wrapper */}
          <article className="bg-white rounded-3xl border border-slate-100 p-6 md:p-10 shadow-sm">
            {activeArticle.imageUrl && (
              <div className="w-full h-64 md:h-[400px] overflow-hidden rounded-3xl mb-8 border border-slate-150">
                <img
                  src={activeArticle.imageUrl}
                  alt={activeArticle.title}
                  className="w-full h-full object-contain bg-white"
                />
              </div>
            )}
            {/* Metadata headers */}
            <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 mb-4">
              <span className="bg-dominant-green-light text-dominant-green-dark font-bold px-2.5 py-1 rounded-md">
                {activeArticle.category}
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {activeArticle.date}
              </span>
              <span className="text-slate-300">|</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {activeArticle.readTime}
              </span>
            </div>

            <h1 className="font-serif text-2xl md:text-4xl font-bold text-slate-950 tracking-tight leading-tight mb-6">
              {activeArticle.title}
            </h1>

            {/* Author Block */}
            <div className="flex items-center gap-3 border-y border-slate-100 py-4 mb-8">
              <div className="w-10 h-10 rounded-full bg-dominant-green-light flex items-center justify-center text-dominant-green font-bold text-sm">
                LB
              </div>
              <div>
                <div className="font-bold text-slate-900 text-sm">Written by {activeArticle.author}</div>
                <div className="text-[10px] text-slate-500 font-medium uppercase">
                  Board Certified Allergist & Clinical Professor
                </div>
              </div>
            </div>

            {/* Article Content - Render markdown-like sections */}
            <div className="prose prose-slate max-w-none text-slate-700 text-xs md:text-sm leading-relaxed space-y-6">
              {activeArticle.content.split("\n\n").map((paragraph, idx) => {
                if (paragraph.startsWith("###")) {
                  return (
                    <h3 key={idx} className="font-serif text-lg md:text-xl font-bold text-slate-900 pt-4">
                      {paragraph.replace("###", "").trim()}
                    </h3>
                  );
                }
                if (paragraph.startsWith("1.") || paragraph.startsWith("-")) {
                  return (
                    <div key={idx} className="pl-4 space-y-2 py-2">
                      {paragraph.split("\n").map((li, lIdx) => (
                        <p key={lIdx} className="text-slate-600 pl-2 border-l-2 border-dominant-green italic">
                          {parseTextAndRenderLinks(li.trim())}
                        </p>
                      ))}
                    </div>
                  );
                }
                return <p key={idx}>{parseTextAndRenderLinks(paragraph)}</p>;
              })}
            </div>

            {/* Doctor Note */}
            <div className="mt-12 bg-slate-50 border-l-4 border-dominant-green p-6 rounded-r-xl">
              <div className="flex items-center gap-2 mb-2">
                <ShieldAlert className="w-5 h-5 text-dominant-green shrink-0" />
                <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider">
                  Patient Medical Disclaimer
                </h4>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                The information provided in this educational guide is for general health literacy only. It is not a substitute for professional medical advice, comprehensive diagnosis, or supervised clinical therapy. If you are experiencing acute allergy, asthma, or eye distress, please schedule an in-person consultation or contact your emergency health services immediately.
              </p>
            </div>

            {/* Print / Action Row */}
            <div className="mt-8 border-t border-slate-100 pt-6 flex flex-wrap justify-between items-center gap-4">
              <button
                onClick={handlePrint}
                className="flex items-center gap-2 text-xs font-bold text-slate-700 hover:text-dominant-green border border-slate-200 hover:border-slate-300 px-4 py-2.5 rounded-lg transition-colors"
              >
                <Printer className="w-4 h-4" />
                <span>Print or Save as PDF for Appointment</span>
              </button>

              {isPrintedAlert && (
                <div className="flex items-center gap-1.5 text-emerald-600 text-xs font-semibold">
                  <CheckCircle className="w-4 h-4 text-emerald-500" />
                  <span>Document loaded in system print dialogue...</span>
                </div>
              )}
            </div>
          </article>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen pt-6 pb-20 font-sans">
      {/* Banner */}
      <div className="bg-slate-900 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center md:text-left">
          <span className="text-dominant-orange font-semibold tracking-widest uppercase text-xs">
            Patient Education Center
          </span>
          <h1 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-white mt-2">
            Allergy & Immunology Guides
          </h1>
          <p className="text-slate-400 mt-3 text-sm md:text-base max-w-2xl leading-relaxed">
            Access certified healthcare information, research breakdowns, and clinical guidelines compiled directly by Dr. Bielory to support your journey to long-term relief.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left Side: Filter Catalog & Search */}
        <div className="lg:col-span-8 space-y-8">
          {/* Search bar & tab filter */}
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between border-b border-slate-100 pb-6">
            {/* Search Input */}
            <div className="relative w-full md:max-w-sm">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search articles & keywords..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-lg pl-9 pr-4 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-dominant-green focus:bg-white transition-all"
              />
            </div>

            {/* Category tabs */}
            <div className="flex gap-2 self-start md:self-auto overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg shrink-0 transition-colors ${
                    selectedCategory === cat
                      ? "bg-slate-900 text-white"
                      : "bg-slate-50 text-slate-600 hover:bg-slate-100"
                  }`}
                >
                  {cat === "all" ? "All Categories" : cat}
                </button>
              ))}
            </div>
          </div>

          {/* Articles Listing */}
          {filteredArticles.length === 0 ? (
            <div className="text-center py-12 bg-slate-50 rounded-2xl border border-dashed border-slate-200">
              <BookOpen className="w-12 h-12 text-slate-300 mx-auto mb-4" />
              <h3 className="font-serif text-lg font-bold text-slate-900">No Articles Found</h3>
              <p className="text-slate-500 text-xs mt-1 px-4">
                We couldn't find any education guides matching your criteria. Try adjusting your search query.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredArticles.map((article) => (
                <div
                  key={article.id}
                  onClick={() => {
                    setReadingArticleId(article.id);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-slate-200 cursor-pointer transition-all flex flex-col justify-between group"
                >
                  <div>
                    {article.imageUrl && (
                      <div className="w-full overflow-hidden rounded-xl mb-4 border border-slate-150">
                        <img
                          src={article.imageUrl}
                          alt={article.title}
                          className="w-full h-auto bg-white transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                    )}
                    <div className="flex justify-between items-center text-[10px] text-dominant-green uppercase font-bold tracking-wider mb-3">
                      <span>{article.category}</span>
                      <span className="flex items-center gap-1 text-slate-400 normal-case font-medium">
                        <Clock className="w-3 h-3" />
                        {article.readTime}
                      </span>
                    </div>

                    <h3 className="font-serif font-bold text-slate-900 text-base leading-snug group-hover:text-dominant-green transition-colors line-clamp-2">
                      {article.title}
                    </h3>

                    <p className="text-slate-600 text-xs mt-3 leading-relaxed line-clamp-3">
                      {article.excerpt}
                    </p>
                  </div>

                  <div className="border-t border-slate-100 pt-4 mt-5 flex justify-between items-center text-xs">
                    <span className="font-bold text-slate-800 text-[11px] flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-slate-400" />
                      {article.author}
                    </span>
                    <span className="text-dominant-green font-bold group-hover:underline">Read Guide &rarr;</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Right Side: Educational Utilities */}
        <div className="lg:col-span-4 space-y-8">
          {/* Quick FAQ / Guidelines Card */}
          <div className="bg-slate-50 border border-slate-100 p-6 rounded-2xl space-y-4">
            <h3 className="font-serif font-bold text-slate-900 text-sm border-b border-slate-200 pb-2">
              Allergy Testing Prep Guides
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              If you have scheduled allergy skin prick testing or contact patch testing, please read these standard clinical guidelines to ensure accurate results:
            </p>
            <div className="space-y-3.5 pt-2 text-xs">
              <div className="flex items-start gap-2.5">
                <span className="bg-dominant-orange-light text-dominant-orange w-5 h-5 rounded-full flex items-center justify-center font-bold text-[10px] shrink-0">1</span>
                <div>
                  <span className="font-semibold text-slate-900 block">Stop Antihistamines</span>
                  <span className="text-slate-500">Cease taking oral antihistamines (e.g., Claritin, Zyrtec, Allegra) 5-7 days before skin prick testing.</span>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="bg-dominant-orange-light text-dominant-orange w-5 h-5 rounded-full flex items-center justify-center font-bold text-[10px] shrink-0">2</span>
                <div>
                  <span className="font-semibold text-slate-900 block">Patch Testing (Avoid Water)</span>
                  <span className="text-slate-500">Contact patch testing stays on your back for 48-72 hours. Do not shower, wet, or scratch your back during this diagnostic window.</span>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="bg-dominant-orange-light text-dominant-orange w-5 h-5 rounded-full flex items-center justify-center font-bold text-[10px] shrink-0">3</span>
                <div>
                  <span className="font-semibold text-slate-900 block">Inhalers & asthma drugs</span>
                  <span className="text-slate-500">Do NOT stop asthma inhalers or chronic controller medications unless specifically instructed by Dr. Bielory.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Support line card */}
          <div className="bg-slate-950 text-white p-6 rounded-2xl relative overflow-hidden">
            <h3 className="font-serif text-lg font-bold">Have an Educational Question?</h3>
            <p className="text-slate-300 text-xs mt-2 leading-relaxed">
              Dr. Bielory regularly uploads new educational literature explaining pollen counts, mold spore waves, dry eye immunology, and food allergens. Let our team know if there is a topic you wish to see addressed.
            </p>
            <div className="mt-5 text-xs text-dominant-orange font-bold">
              Call our offices during business hours for support.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Helper to convert plain text URLs and DOIs into clickable links
function parseTextAndRenderLinks(text: string) {
  const regex = /(https?:\/\/[^\s\)]+)|(DOI:\s*([^\s\)]+))/gi;

  const parts: ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  regex.lastIndex = 0;

  while ((match = regex.exec(text)) !== null) {
    const matchIndex = match.index;

    // Add plain text before match
    if (matchIndex > lastIndex) {
      parts.push(text.substring(lastIndex, matchIndex));
    }

    if (match[1]) {
      // It's a URL
      let url = match[1];
      let trailingPunctuation = "";
      const puncMatch = url.match(/[\.,;\?]+$/);
      if (puncMatch) {
        trailingPunctuation = puncMatch[0];
        url = url.substring(0, url.length - trailingPunctuation.length);
      }
      parts.push(
        <span key={matchIndex}>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 hover:underline font-semibold break-all"
          >
            {url}
          </a>
          {trailingPunctuation}
        </span>
      );
    } else if (match[2]) {
      // It's a DOI
      const doiId = match[3];
      const doiUrl = `https://doi.org/${doiId}`;
      parts.push(
        <span key={matchIndex}>
          DOI:{" "}
          <a
            href={doiUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 hover:underline font-semibold break-all"
          >
            {doiId}
          </a>
        </span>
      );
    }

    lastIndex = regex.lastIndex;
  }

  // Add the remaining text
  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex));
  }

  return parts.length > 0 ? parts : text;
}

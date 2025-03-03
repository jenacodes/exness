const LegalTexts = () => {
  const legalTexts = [
    `Exness (SC) Ltd is a Securities Dealer registered in Seychelles with registration number 8423606-1...`,
    `shshhshshs`,
    // ... (other legal paragraphs)
  ];
  return (
    <div className="my-8 text-xs text-gray-400 md:text-sm">
      {legalTexts.map((text, index) => (
        <p key={index} className="my-0.5 leading-relaxed">
          {text}
        </p>
      ))}
    </div>
  );
};

export default LegalTexts;

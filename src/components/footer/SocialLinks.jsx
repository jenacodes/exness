const SocialLinks = () => {
  return (
    <div className="flex items-start gap-4 my-12 md:gap-6">
      {["facebook", "twitter", "instagram", "linkedin", "youtube"].map(
        (platform) => (
          <a
            key={platform}
            href="#"
            className="p-2 text-gray-600 transition-colors hover:text-gray-400"
          >
            <i className={`ri-${platform}-fill text-2xl`} />
          </a>
        )
      )}
    </div>
  );
};

export default SocialLinks;

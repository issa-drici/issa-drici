export const useMenuAdmin = () => {
  const NavAdmin = [
    {
      title: "GÉNÉRAL",
      links: [
        {
          label: "Accueil",
          icon: "FaHome",
          url: "/admin",
        },
        {
          label: "Entreprises",
          icon: "FaBuilding",
          url: "/entreprises",
        },
        {
          label: "Clients",
          icon: "FaPortrait",
          url: "/clients",
        },
        {
          label: "Projets",
          icon: "FaFolder",
          url: "/projets",
        },
        {
          label: "Rendez-vous",
          icon: "FaRegCalendarAlt",
          url: "/list-rdvs",
        },
      ],
    },
    {
      title: "SUR CHANTIER",
      links: [
        {
          label: "Rdv Client / Devis",
          icon: "FaHardHat",
          url: "/rdvs-client-list",
        },
      ],
    },
  ];

  return {
    NavAdmin,
  };
};

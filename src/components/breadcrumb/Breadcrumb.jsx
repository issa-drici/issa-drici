import {
  Breadcrumb as BreadcrumChakra,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Icon,
} from "@chakra-ui/react";
import React from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { FiChevronRight } from "react-icons/fi";
import { useParams, useNavigate, useLocation } from "react-router-dom";

const Breadcrumb = (props) => {
  // Hooks
  const { projetId, rdvId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const handleGoBack = () => {
    if (location?.state?.prevPath) {
      navigate(`${location?.state?.prevPath}`);
    } else {
      navigate(-1);
    }
  };

  const displayEntreprisesItem = location?.pathname === "/entreprises";
  const displayClientsItem = location?.pathname === "/clients";
  const displayProjetsItem = location?.pathname === "/projets" || projetId;
  const displayListRdvTabletteItem = location?.pathname === "/rdvs-client-list" || rdvId;
  const displayRdvClientTabletteItem = location?.pathname === `/rdv-client/${rdvId}`;

  return (
    <BreadcrumChakra
      // border="1px solid red"
      w="inherit"
      spacing="8px"
      separator={<Icon as={FiChevronRight} variant="outlined" />}
    >
      {/* Bouton retour */}
      <BreadcrumbItem isCurrentPage>
        <BreadcrumbLink onClick={handleGoBack}>
          <Button
            justifyContent="center"
            alignItems="center"
            height="25px"
            width="25px"
            minWidth="25px"
            cursor="pointer"
            backgroundColor="gray.700"
            padding={2}
            color="white"
            borderRadius="15px"
            _hover={{ backgroundColor: "gray.500" }}
          >
            <Icon as={IoMdArrowRoundBack} w={3} h={3} />
          </Button>
        </BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem isCurrentPage>
        <BreadcrumbLink onClick={() => navigate("/")}>Accueil</BreadcrumbLink>
      </BreadcrumbItem>
      {displayEntreprisesItem && (
        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink onClick={() => navigate("/entreprises")}>
            Entreprises
          </BreadcrumbLink>
        </BreadcrumbItem>
      )}
      {displayClientsItem && (
        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink onClick={() => navigate("/clients")}>
            Clients
          </BreadcrumbLink>
        </BreadcrumbItem>
      )}
      {displayProjetsItem && (
        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink onClick={() => navigate("/projets")}>
            Projets
          </BreadcrumbLink>
        </BreadcrumbItem>
      )}
      {displayListRdvTabletteItem && (
        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink onClick={() => navigate("/rdvs-client-list")}>
            Liste des rendez-vous
          </BreadcrumbLink>
        </BreadcrumbItem>
      )}
      {displayRdvClientTabletteItem && (
        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink onClick={() => navigate(`/rdv-client/${rdvId}`)}>
            Rdv Client
          </BreadcrumbLink>
        </BreadcrumbItem>
      )}
      {projetId && (
        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink onClick={() => navigate(`/projet/${projetId}`)}>
            Projet
          </BreadcrumbLink>
        </BreadcrumbItem>
      )}
    </BreadcrumChakra>
  );
};

export default Breadcrumb;

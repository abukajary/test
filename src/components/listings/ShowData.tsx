import React, { useState } from "react";

import InfoDeleteModal from "../modal/InfoDeleteModal";
import UpdateModal from "../modal/EditModal";

import companiesData from "../../data/companies.json";
import ownershipsData from "../../data/ownerships.json";

import { EditSvg } from "../ui/svg/EditSvg";
import { TrashCan } from "../ui/svg/TrashCan";
import {
  Container,
  Header,
  CardContainer,
  Card,
  CardDetails,
  CardButtons,
} from "./ListingUi";

const combinedArray = companiesData.map((company) => {
  const linkedOwnership = ownershipsData.find(
    (item) => item.id === company.ownership_id
  );
  return {
    ...company,
    ownership: linkedOwnership,
  };
});

const ShowData = () => {
  const CorporationImage = require("../ui/Corporation.png");
  const [companies, setCompanies] = useState(combinedArray);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleDelete = (index: any) => {
    setIsDeleteModalOpen(true);
    setSelectedItem(index);
  };

  const handleConfirmDelete = (id: number) => {
    const updatedCompanies = companies.filter(
      (item: any) => item.company_id !== selectedItem
    );
    setCompanies(updatedCompanies);
    setIsDeleteModalOpen(false);
  };

  const handleUpdate = (id: any, newData: any) => {
    setIsUpdateModalOpen(true);
    setSelectedItem(id);
  };

  const handleConfirmUpdate = (updatedItem: any) => {
    const updatedCompanies = companies.map((item: any) => {
      if (item.company_id === selectedItem) {
        return {
          ...item,
          ...updatedItem,
          ownership: {
            ...item.ownership,
            ...updatedItem,
          },
        };
      }
      return item;
    });
    setCompanies(updatedCompanies);
  };

  return (
    <Container>
      <InfoDeleteModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={handleConfirmDelete}
      />
      <UpdateModal
        isOpen={isUpdateModalOpen}
        onClose={() => setIsUpdateModalOpen(false)}
        onUpdate={handleConfirmUpdate}
        initialData={companies}
      />

      <Header>Мои организации</Header>
      <CardContainer>
        {companies.map((item: any) => (
          <Card key={item.company_id}>
            <img src={item.logo ? item.logo : CorporationImage} />
            <CardDetails>
              <p>
                {item.ownership.short} {item.company_name}
              </p>
              <p>{item.company_tin}</p>
            </CardDetails>
            <CardButtons>
              <EditSvg
                color="#005DA1"
                size="24"
                onClick={() =>
                  handleUpdate(item.company_id, {
                    company_name: "dsa",
                    company_tin: "000",
                    short: "ds1a",
                  })
                }
              />
              <TrashCan
                onClick={() => handleDelete(item.company_id)}
                color="#D20000"
                size="24"
              />
            </CardButtons>
          </Card>
        ))}
      </CardContainer>
    </Container>
  );
};

export default ShowData;

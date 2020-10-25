import { Client } from "../../prismic-configuration";
import { DocumentTypes } from "../../constants/types";

const { CASE_STUDY, CLIENT } = DocumentTypes;

export const getCaseStudyByUID = async (slug) => {
    const res = await Client().getByUID(CASE_STUDY, slug);
    return res.data
}

export const getClientByUID = async (slug) => {
    const res = await Client().getByUID(CLIENT, slug)
    return res.data
}
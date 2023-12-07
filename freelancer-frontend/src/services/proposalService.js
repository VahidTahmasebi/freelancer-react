import http from "./httpService";

export function changeProposalApi({ id, data }) {
  return http.get(`/proposal/${id}`, data).then(({ data }) => data.data);
}

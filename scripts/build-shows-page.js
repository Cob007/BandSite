import * as apiClientProvider from "./band-site-api.js";

const ulTicketEl = document.querySelector(".shows-container__ticket-list");
const loadTickets = (tickets) => {
  tickets.forEach((ticket) => {
    const liTicket = document.createElement("li");
    liTicket.classList.add("shows-container__ticket-item");

    const divTicket = document.createElement("div");

    const ticketEl = document.createElement("div");
    ticketEl.classList.add("shows-container__ticket");

    const dateSectionEl = document.createElement("section");
    dateSectionEl.classList.add("shows-container__ticket-section");

    const dateLabelEl = createEl("h3");
    dateLabelEl.classList.add("shows-container__ticket-label");
    dateLabelEl.textContent = "DATE";

    const dateEl = createEl("p");
    dateEl.classList.add("shows-container__ticket-date");
    const usDateFormat = new apiClientProvider.Converter(ticket.date);
    dateEl.textContent = usDateFormat.getUsDateFormatter();

    dateSectionEl.appendChild(dateLabelEl);
    dateSectionEl.appendChild(dateEl);

    const venueSectionEl = createEl("section");
    venueSectionEl.classList.add("shows-container__ticket-section");

    const venueLabelEl = createEl("h3");
    venueLabelEl.classList.add("shows-container__ticket-label");
    venueLabelEl.textContent = "VENUE";

    const venueEl = createEl("p");
    venueEl.classList.add("shows-container__ticket-venue");
    venueEl.textContent = ticket.place;

    venueSectionEl.appendChild(venueLabelEl);
    venueSectionEl.appendChild(venueEl);

    const locationSectionEl = createEl("section");
    locationSectionEl.classList.add("shows-container__ticket-section");

    const locationLabelEl = createEl("h3");
    locationLabelEl.classList.add("shows-container__ticket-label");
    locationLabelEl.textContent = "LOCATION";

    const locationEl = createEl("p");
    locationEl.classList.add("shows-container__ticket-location");
    locationEl.textContent = ticket.location;

    locationSectionEl.appendChild(locationLabelEl);
    locationSectionEl.appendChild(locationEl);

    const buttonEL = createEl("button");
    buttonEL.classList.add("shows-container__button");
    buttonEL.textContent = "BUY TICKET";
    buttonEL.addEventListener("click", () => {
      liTicket.classList.add("shows-container__ticket-item-clicked");
    });

    ticketEl.appendChild(dateSectionEl);
    ticketEl.appendChild(venueSectionEl);
    ticketEl.appendChild(locationSectionEl);
    ticketEl.appendChild(buttonEL);

    const dividerEl = createEl("div");
    dividerEl.classList.add("shows-container__divider");

    divTicket.appendChild(ticketEl);
    divTicket.appendChild(dividerEl);

    liTicket.appendChild(divTicket);

    ulTicketEl.prepend(liTicket);
  });
};

function createEl(type) {
  return document.createElement(type);
}

const getRometeShowsCall = async (key) => {
  const getShowsClient = new apiClientProvider.BandSiteApi(key);
  const resApiData = await getShowsClient.getShows();
  loadTickets(resApiData);
};

getRometeShowsCall(new apiClientProvider.Constant().getApiKey());

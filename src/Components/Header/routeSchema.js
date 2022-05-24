import HomeIcon from "@mui/icons-material/Home";
import GavelIcon from "@mui/icons-material/Gavel";
import InfoIcon from "@mui/icons-material/Info";
import PublishIcon from "@mui/icons-material/Publish";

export const TopHeaderRoutingSchema = [
  {
    route: `/`,
    tag: "Home",
    key: "1",
    icon: <HomeIcon />,
  },
  {
    route: `/auctions`,
    tag: "Auctions",
    key: "2",
    icon: <GavelIcon />,
  },
  {
    route: `/about`,
    tag: "About",
    key: "3",
    icon: <InfoIcon />,
  },
  {
    route: `/submit_for_auction`,
    tag: "Submit for Auction",
    key: "4",
    icon: <PublishIcon />,
  },
];

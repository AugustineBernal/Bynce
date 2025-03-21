import { Avatar, IconButton } from "@mui/material"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { faTelegram, faTwitter } from "@fortawesome/free-brands-svg-icons"

function Header(): JSX.Element {
  return (
    <header className="header">
      <div className="header-item" style={{ justifyContent: "flex-start" }}>
        <Avatar
          alt="Bynce"
          src="/logo.png"
          sx={{
            width: 36,
            height: 36,
            marginRight: ".5rem",
            transition: "transform 2s ease-in-out",
            "&:hover": {
              transform: "rotate(360deg)",
            },
          }}
        />
        <h2>Bynce</h2>
      </div>

      {}
      <div className="header-item" style={{ marginTop: "50px" }}>
        <p> </p>
      </div>

      <div className="header-item" style={{ justifyContent: "flex-end" }}>
        {}
        <a href="https://t.me/your-telegram-link" target="_blank">
          <IconButton>
            <FontAwesomeIcon icon={faTelegram} color="white" size="sm" />
          </IconButton>
        </a>
        {}
        <a href="https://x.com" target="_blank">
          <IconButton size="small" color="inherit">
            <FontAwesomeIcon icon={faTwitter} color="white" size="sm" />
          </IconButton>
        </a>
      </div>
    </header>
  )
}

export default Header

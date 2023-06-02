import React from 'react';
import { Container } from 'react-bootstrap';
import bugMinerLogo from '../../assets/images/Bugminer Logo.png';

function LoadingSpinner() {
  return (
    <Container><img src={bugMinerLogo} height="380" width="480" alt=" " className="img-fluid" />
      <div class="spinner-grow text-primary" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>

    </Container>
  )
}

export default LoadingSpinner
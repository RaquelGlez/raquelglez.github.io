import { Valve } from './Valve'

export const TankValve = () => {
  
    return (
      <div className="helper-valve__line-container">
          <div className="helper-valve__main-line helper-valve__line"></div>
          <div className="helper-valve__valve">
            <Valve comp="proyect" />
          </div>
        </div>
    );
  };
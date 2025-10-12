

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const RiPokerDiamondsFill = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 12, 12)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M4.03607 10.7336L11.2259 1.94599C11.626 1.45697 12.3737 1.45697 12.7738 1.94599L19.9637 10.7336C20.5664 11.4703 20.5664 12.5298 19.9637 13.2665L12.7738 22.0541C12.3737 22.5431 11.626 22.5431 11.2259 22.0541L4.03607 13.2665C3.43329 12.5298 3.43329 11.4703 4.03607 10.7336Z" />
        </G>
      </Svg>
    );
  }




  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiArrowElbowLeftBold = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 256 256"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 128, 128)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M240.49,104.49l-96,96a12,12,0,0,1-17,0L36,109v43a12,12,0,0,1-24,0V80A12,12,0,0,1,24,68H96a12,12,0,0,1,0,24H53l83,83,87.51-87.52a12,12,0,0,1,17,17Z" />
        </G>
      </Svg>
    );
  }


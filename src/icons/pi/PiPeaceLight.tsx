

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiPeaceLight = (props: IconProps) => {

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
          <Path  d="M128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26Zm90,102a89.44,89.44,0,0,1-13,46.58l-71-49.7V38.2A90.12,90.12,0,0,1,218,128ZM122,38.2v86.68l-71,49.7A90,90,0,0,1,122,38.2ZM57.92,184.4,122,139.53V217.8A89.93,89.93,0,0,1,57.92,184.4ZM134,217.8V139.53l64.08,44.87A89.93,89.93,0,0,1,134,217.8Z" />
        </G>
      </Svg>
    );
  }


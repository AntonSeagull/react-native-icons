

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiChalkboardSimpleThin = (props: IconProps) => {

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
          <Path  d="M240,196H228V168a4,4,0,0,0-4-4H160a4,4,0,0,0-4,4v28H36V56a4,4,0,0,1,4-4H216a4,4,0,0,1,4,4v80a4,4,0,0,0,8,0V56a12,12,0,0,0-12-12H40A12,12,0,0,0,28,56V196H16a4,4,0,0,0,0,8H240a4,4,0,0,0,0-8Zm-76-24h56v24H164Z" />
        </G>
      </Svg>
    );
  }


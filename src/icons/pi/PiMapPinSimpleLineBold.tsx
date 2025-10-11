

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiMapPinSimpleLineBold = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 256 256"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M216,204H140V138.79a60,60,0,1,0-24,0V204H40a12,12,0,0,0,0,24H216a12,12,0,0,0,0-24ZM92,80a36,36,0,1,1,36,36A36,36,0,0,1,92,80Z" />
        </G>
      </Svg>
    );
  }


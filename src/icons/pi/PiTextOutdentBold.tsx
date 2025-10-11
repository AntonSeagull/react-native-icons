

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiTextOutdentBold = (props: IconProps) => {

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
          <Path d="M228,128a12,12,0,0,1-12,12H120a12,12,0,0,1,0-24h96A12,12,0,0,1,228,128ZM120,76h96a12,12,0,0,0,0-24H120a12,12,0,0,0,0,24Zm96,104H40a12,12,0,0,0,0,24H216a12,12,0,0,0,0-24ZM72,148a12,12,0,0,0,8.49-20.49L49,96,80.49,64.48a12,12,0,0,0-17-17l-40,40a12,12,0,0,0,0,17l40,40A12,12,0,0,0,72,148Z" />
        </G>
      </Svg>
    );
  }


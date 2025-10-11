

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const RiExpandDiagonalSFill = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M19 5H11.5L14.5429 8.04289L8.04289 14.5429L5 11.5V19H12.5L9.45711 15.9571L15.9571 9.45711L19 12.5V5Z" />
        </G>
      </Svg>
    );
  }


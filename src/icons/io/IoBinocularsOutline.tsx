

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoBinocularsOutline = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 512 512"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M208 344V128C208 101.5 192 80 164 80C129 80 117.5 101.5 107 128C107 128 58.5 255.833 36 317.5" />
          <Path d="M208 184C208 184 224.5 176 256 176C287.5 176 304 184 304 184" />
          <Path d="M208 272C208 272 224.5 264 256 264C287.5 264 304 272 304 272" />
          <Path d="M304 344V128C304 101.5 320 80 348 80C383 80 394.5 101.5 405 128C405 128 453.5 255.833 476 317.5" />
        </G>
      </Svg>
    );
  }


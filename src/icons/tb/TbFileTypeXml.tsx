

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbFileTypeXml = (props: IconProps) => {

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
          <Path d="M14 3v4a1 1 0 0 0 1 1h4" />
          <Path d="M5 12v-7a2 2 0 0 1 2 -2h7l5 5v4" />
          <Path d="M4 15l4 6" />
          <Path d="M4 21l4 -6" />
          <Path d="M19 15v6h3" />
          <Path d="M11 21v-6l2.5 3l2.5 -3v6" />
        </G>
      </Svg>
    );
  }


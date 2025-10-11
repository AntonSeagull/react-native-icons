

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiTextItalicLight = (props: IconProps) => {

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
          <Path d="M198,56a6,6,0,0,1-6,6H156.32l-44,132H144a6,6,0,0,1,0,12H64a6,6,0,0,1,0-12H99.68l44-132H112a6,6,0,0,1,0-12h80A6,6,0,0,1,198,56Z" />
        </G>
      </Svg>
    );
  }


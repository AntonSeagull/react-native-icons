

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoLanguageOutline = (props: IconProps) => {

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
          <Path d="M281.3,112S257,206,199,277,80,384,80,384" />
          <Path d="M256,336s-35-27-72-75-56-85-56-85" />
        </G>
      </Svg>
    );
  }


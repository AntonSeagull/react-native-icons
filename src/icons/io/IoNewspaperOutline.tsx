

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoNewspaperOutline = (props: IconProps) => {

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
          <Path d="M368,415.86V72a24.07,24.07,0,0,0-24-24H72A24.07,24.07,0,0,0,48,72V424a40.12,40.12,0,0,0,40,40H416" />
          <Path d="M416,464h0a48,48,0,0,1-48-48V128h72a24,24,0,0,1,24,24V416A48,48,0,0,1,416,464Z" />
          <Path d="M176,208H112a16,16,0,0,1-16-16V128a16,16,0,0,1,16-16h64a16,16,0,0,1,16,16v64A16,16,0,0,1,176,208Z" />
        </G>
      </Svg>
    );
  }


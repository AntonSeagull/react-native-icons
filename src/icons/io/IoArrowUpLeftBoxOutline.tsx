

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoArrowUpLeftBoxOutline = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 512 512"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 256, 256)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M242.764 123.636L421.455 123.636C432.738 123.636 443.56 128.119 451.539 136.098C459.518 144.076 464 154.898 464 166.182L464 421.455C464 432.738 459.518 443.56 451.539 451.539C443.56 459.518 432.738 464 421.455 464L166.182 464C154.898 464 144.076 459.518 136.098 451.539C128.119 443.56 123.636 432.738 123.636 421.455L123.636 242.764" strokeWidth="32" strokeLinecap="round" strokeLinejoin="round" />
          <Path  d="M180.364 48L47.9999 48L48 180.364" strokeWidth="32" strokeLinecap="round" strokeLinejoin="round" />
          <Path  d="M296 296L48 48" strokeWidth="32" strokeLinecap="round" strokeLinejoin="round" />
        </G>
      </Svg>
    );
  }


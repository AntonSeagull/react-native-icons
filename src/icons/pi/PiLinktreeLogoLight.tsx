

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiLinktreeLogoLight = (props: IconProps) => {

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
          <Path  d="M134,160v72a6,6,0,0,1-12,0V160a6,6,0,0,1,12,0Zm74-62H142.48l45.76-45.76a6,6,0,0,0-8.48-8.48L134,89.52V24a6,6,0,0,0-12,0V89.52L76.24,43.76a6,6,0,0,0-8.48,8.48L113.52,98H48a6,6,0,0,0,0,12h65.52L67.76,155.76a6,6,0,1,0,8.48,8.48L128,112.48l51.76,51.76a6,6,0,0,0,8.48-8.48L142.48,110H208a6,6,0,0,0,0-12Z" />
        </G>
      </Svg>
    );
  }




  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiAlignBottomSimpleThin = (props: IconProps) => {

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
          <Path d="M204,232a4,4,0,0,1-4,4H56a4,4,0,0,1,0-8H200A4,4,0,0,1,204,232ZM84,192V40A12,12,0,0,1,96,28h64a12,12,0,0,1,12,12V192a12,12,0,0,1-12,12H96A12,12,0,0,1,84,192Zm8,0a4,4,0,0,0,4,4h64a4,4,0,0,0,4-4V40a4,4,0,0,0-4-4H96a4,4,0,0,0-4,4Z" />
        </G>
      </Svg>
    );
  }


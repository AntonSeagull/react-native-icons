

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoPricetagSharp = (props: IconProps) => {

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
          <Path d="M304,32,16,320,192,496,480,208V32Zm80,128a32,32,0,1,1,32-32A32,32,0,0,1,384,160Z" />
        </G>
      </Svg>
    );
  }


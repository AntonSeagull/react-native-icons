

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const VscArrowSmallLeft = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 16 16"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M6.5 10.7L4 8.2v-.7L6.5 5l.71.7-1.64 1.65h5.57v1H5.57L7.22 10l-.72.7z" />
        </G>
      </Svg>
    );
  }


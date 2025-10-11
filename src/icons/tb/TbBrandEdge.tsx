

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbBrandEdge = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 12, 12)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M20.978 11.372a9 9 0 1 0 -1.593 5.773" />
          <Path  d="M20.978 11.372c.21 2.993 -5.034 2.413 -6.913 1.486c1.392 -1.6 .402 -4.038 -2.274 -3.851c-1.745 .122 -2.927 1.157 -2.784 3.202c.28 3.99 4.444 6.205 10.36 4.79" />
          <Path  d="M3.022 12.628c-.283 -4.043 8.717 -7.228 11.248 -2.688" />
          <Path  d="M12.628 20.978c-2.993 .21 -5.162 -4.725 -3.567 -9.748" />
        </G>
      </Svg>
    );
  }




  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const CgArrowLongUpL = (props: IconProps) => {

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
          <Path  d="M12.0321 1.01865L16.2425 5.29327L14.8177 6.69677L13.0192 4.87094L12.9676 20.9813H14.9644V22.9813H8.96441V20.9813H10.9676L11.0194 4.82354L9.16107 6.65399L7.75757 5.22914L12.0321 1.01865Z" fill="currentColor" />
        </G>
      </Svg>
    );
  }


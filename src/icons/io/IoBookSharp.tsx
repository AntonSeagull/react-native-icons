

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoBookSharp = (props: IconProps) => {

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
          <Path  d="M464,48c-67.61.29-117.87,9.6-154.24,25.69C282.62,85.69,272,94.77,272,125.53V448c41.57-37.5,78.46-48,224-48V48Z" />
          <Path  d="M48,48c67.61.29,117.87,9.6,154.24,25.69,27.14,12,37.76,21.08,37.76,51.84V448c-41.57-37.5-78.46-48-224-48V48Z" />
        </G>
      </Svg>
    );
  }


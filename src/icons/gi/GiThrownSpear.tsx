

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GiThrownSpear = (props: IconProps) => {

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
          <Path  d="M248.25 16.688C124.165 17.31-57.308 93.192 51.22 374.563 12.847 60.82 305.093 126.845 394.47 336.469l-76.564-281-2.562-9.47 9.437-2.656 17.94-5.063c-14.344-12.722-50.85-21.812-94.47-21.593zm112.688 37.03l-21.344 6.032L422 362.25l-29.625 4.813 94.063 127.718 7.53-144.186-22.156 3.594-110.875-300.47z" />
        </G>
      </Svg>
    );
  }


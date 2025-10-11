

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GiStahlhelm = (props: IconProps) => {

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
          <Path  d="M489.824 354.324c-5.91-6.65-41.57-41.8-44.52-69.228-3.385-31.43-7.713-98.336-26.74-123.443-24.465-32.287-51.253-57.334-165.762-57.334-81.727 0-123.298 16.922-150.714 53.815-16.464 22.194-30.22 79.418-33.266 113.01-4.618 50.058-50.407 39.275-49.416 53.78.98 14.313 67.185 17.94 156.878 18.266 59.46.218 104.2 60.26 135.93 63.173 94.698 8.75 198.848-28.057 177.61-52.04zM272.24 230.964a16.246 16.246 0 1 1 16.245-16.245 16.246 16.246 0 0 1-16.234 16.245z" class="cls-2" />
        </G>
      </Svg>
    );
  }


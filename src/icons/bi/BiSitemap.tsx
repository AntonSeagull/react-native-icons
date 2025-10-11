

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const BiSitemap = (props: IconProps) => {

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
          <Path  d="M20 13.01h-7V10h1c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2h-4c-1.103 0-2 .897-2 2v4c0 1.103.897 2 2 2h1v3.01H4V18H3v4h4v-4H6v-2.99h5V18h-1v4h4v-4h-1v-2.99h5V18h-1v4h4v-4h-1v-4.99zM10 8V4h4l.002 4H10z" />
        </G>
      </Svg>
    );
  }


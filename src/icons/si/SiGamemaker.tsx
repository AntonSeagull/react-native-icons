

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const SiGamemaker = (props: IconProps) => {

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
          <Path  d="M.012 11.994 12.006 0l11.982 12.006h-6.831l-5.163-5.151-5.151 5.151 5.163 5.151v-5.151h5.151v6.903L12.006 24z" />
        </G>
      </Svg>
    );
  }


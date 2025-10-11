

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbPresentationAnalytics = (props: IconProps) => {

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
          <Path  d="M9 12v-4" />
          <Path  d="M15 12v-2" />
          <Path  d="M12 12v-1" />
          <Path  d="M3 4h18" />
          <Path  d="M4 4v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-10" />
          <Path  d="M12 16v4" />
          <Path  d="M9 20h6" />
        </G>
      </Svg>
    );
  }


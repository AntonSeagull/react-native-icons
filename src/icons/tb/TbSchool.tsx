

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbSchool = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M22 9l-10 -4l-10 4l10 4l10 -4v6" />
          <Path d="M6 10.6v5.4a6 3 0 0 0 12 0v-5.4" />
        </G>
      </Svg>
    );
  }


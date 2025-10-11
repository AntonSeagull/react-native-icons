

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbGenderGenderless = (props: IconProps) => {

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
          <Path  d="M12 10a5 5 0 1 1 0 10a5 5 0 0 1 0 -10z" />
          <Path  d="M12 10v-7" />
          <Path  d="M7 15h10" />
        </G>
      </Svg>
    );
  }


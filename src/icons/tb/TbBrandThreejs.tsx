

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbBrandThreejs = (props: IconProps) => {

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
          <Path  d="M8 22l-5 -19l19 5.5z" />
          <Path  d="M12.573 17.58l-6.152 -1.576l8.796 -9.466l1.914 6.64" />
          <Path  d="M12.573 17.58l-1.573 -6.58l6.13 2.179" />
          <Path  d="M9.527 4.893l1.473 6.107l-6.31 -1.564z" />
        </G>
      </Svg>
    );
  }


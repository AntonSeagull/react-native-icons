

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbAugmentedRealityOff = (props: IconProps) => {

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
          <Path  d="M4 8v-2c0 -.557 .228 -1.061 .595 -1.424" />
          <Path  d="M4 16v2a2 2 0 0 0 2 2h2" />
          <Path  d="M16 4h2a2 2 0 0 1 2 2v2" />
          <Path  d="M16 20h2c.558 0 1.062 -.228 1.425 -.596" />
          <Path  d="M12 12.5l.312 -.195m2.457 -1.536l1.231 -.769" />
          <Path  d="M9.225 9.235l-1.225 .765l4 2.5v4.5l3.076 -1.923m.924 -3.077v-2l-4 -2.5l-.302 .189" />
          <Path  d="M8 10v4.5l4 2.5" />
          <Path  d="M3 3l18 18" />
        </G>
      </Svg>
    );
  }


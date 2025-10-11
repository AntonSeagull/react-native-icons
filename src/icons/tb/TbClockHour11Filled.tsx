

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbClockHour11Filled = (props: IconProps) => {

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
          <Path  d="M17 3.34a10 10 0 1 1 -15 8.66l.005 -.324a10 10 0 0 1 14.995 -8.336m-4.952 9.659l.069 -.006l.096 -.016l.089 -.023l.099 -.038l.082 -.04l.113 -.073l.073 -.06l.074 -.074l.075 -.094l.052 -.08l.035 -.07l.051 -.132l.031 -.135l.01 -.082l.003 -.076v-5a1 1 0 0 0 -2 0v1.697l-.168 -.252a1 1 0 0 0 -1.286 -.336l-.1 .059a1 1 0 0 0 -.278 1.387l2.018 3.027l.07 .087l.075 .074l.094 .075l.08 .052l.07 .035l.132 .051l.135 .031l.082 .01z" />
        </G>
      </Svg>
    );
  }


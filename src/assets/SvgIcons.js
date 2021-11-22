/* eslint-disable no-unused-vars */
import * as React from 'react';
import {View, StyleSheet} from 'react-native';
import Svg, {Path, G, Circle, Ellipse} from 'react-native-svg';

const colorRef = '#ffffff';

const styles = StyleSheet.create({
  view: {
    aspectRatio: 1,
  },
});

export function ZoomSvg({color = colorRef}) {
  return (
    <View style={styles.view}>
      <Svg height="100%" width="100%" viewBox="0 0 21 21 ">
        <Path
          clipRule="evenodd"
          d="M8.823 16.647A7.823 7.823 0 108.823 1a7.823 7.823 0 000 15.647z"
          stroke={color}
          strokeWidth={2}
        />
        <Path d="M14.168 14.243l5.541 5.469" stroke={color} strokeWidth={2} />
      </Svg>
    </View>
  );
}

export function Home({color = colorRef, props}) {
  return (
    <View style={[styles.view, props]}>
      <Svg height="100%" width="100%">
        <Path d="M26 13v13H6V13l10-8 10 8z" stroke={color} strokeWidth={2} />
      </Svg>
    </View>
  );
}

export function Wineries({color = colorRef, props}) {
  return (
    <View style={[styles.view, props]}>
      <Svg height="100%" width="100%">
        <Circle cx={15.5} cy={10.5} r={5.5} stroke={color} strokeWidth={2} />
        <Circle cx={15.5} cy={12.5} r={1.5} fill={color} />
        <Circle cx={9.5} cy={20.5} r={5.5} stroke={color} strokeWidth={2} />
        <Circle cx={21.5} cy={20.5} r={5.5} stroke={color} strokeWidth={2} />
      </Svg>
    </View>
  );
}

export function Wines({color = colorRef, props}) {
  return (
    <View style={[styles.view, props]}>
      <Svg height="100%" width="100%">
        <Path
          clipRule="evenodd"
          d="M18.823 21.647a7.823 7.823 0 100-15.647 7.823 7.823 0 000 15.647z"
          stroke={color}
          strokeWidth={2}
        />
        <Path
          d="M24.167 19.243l5.541 5.469M2 7h7M2 13h5M2 19h7"
          stroke={color}
          strokeWidth={2}
        />
      </Svg>
    </View>
  );
}

export function Favorites({color = colorRef, props}) {
  return (
    <View style={[styles.view, props]}>
      <Svg height="100%" width="100%">
        <Path
          d="M15.967 19.3l6.966 5.7V5.533H9V25l6.967-5.7z"
          stroke={color}
          strokeWidth={2}
        />
      </Svg>
    </View>
  );
}

export function Profile({color = colorRef, props}) {
  return (
    <View style={[styles.view, props]}>
      <Svg height="100%" width="100%">
        <Path
          d="M16 18a8 8 0 00-8 8h16a8 8 0 00-8-8z"
          stroke={color}
          strokeWidth={2}
        />
        <Circle cx={16} cy={10} r={4} stroke={color} strokeWidth={2} />
      </Svg>
    </View>
  );
}

export function Qrcode({color = colorRef, props}) {
  return (
    <View style={[styles.view, props]}>
      <Svg height="100%" width="100%" viewBox="0 0 24 24 ">
        <Path
          d="M10 14v2H8v-2H6v4h6v-2h2v-2h-4zM14 16h2v2h-2v-2zM16 14h2v2h-2v-2zM14 10h-2V8h-2v4h4v2h2v-2h2v-2h-2V8h-2v2zM16 6h2v2h-2V6zM12 6h2v2h-2V6zM8 12h2v2H8v-2zM6 6v4h2V8h2V6H6z"
          fill={color}
        />
        <Path
          d="M7 23H1v-6M1 7V1h6M17 1h6v6M23 17v6h-6"
          stroke={color}
          strokeOpacity={0.4}
          strokeWidth={2}
        />
      </Svg>
    </View>
  );
}

export function Badge({color = colorRef, props}) {
  return (
    <View style={[styles.view, props]}>
      <Svg height="100%" width="100%" viewBox="0 0 11 22 ">
        <Path
          d="M8.74 0S7.165-.04 6.277 1.016c-.888 1.056-.752 2.81-.752 2.81S7.1 3.867 7.988 2.81c.888-1.056.752-2.81.752-2.81zm-5.5 1.194s-1.042 1.32-.89 2.758c.154 1.438 1.443 2.45 1.443 2.45l.006-.009c.272.251 1.273 1.095 2.375.972C7.464 7.222 8.395 5.8 8.395 5.8S7.232 4.613 5.942 4.756c-.735.081-1.345.575-1.74.986.272-.52.566-1.288.48-2.1-.153-1.438-1.441-2.448-1.441-2.448zM.72 6.614S.08 8.225.611 9.546c.532 1.322 2.033 1.854 2.033 1.854l.006-.018c.338.115 1.552.462 2.527-.124 1.14-.687 1.51-2.397 1.51-2.397s-1.482-.598-2.624.089c-.552.332-.92.903-1.156 1.405.084-.556.1-1.25-.154-1.884C2.222 7.148.719 6.615.719 6.615zm5.398 5.342s-1.54.37-2.182 1.628c-.31.607-.352 1.307-.315 1.872-.19-.523-.505-1.123-1.018-1.513C1.529 13.131 0 13.56 0 13.56s.212 1.744 1.286 2.555c1.074.813 2.604.387 2.604.387l-.003-.017c.336-.1 1.537-.522 2.088-1.6.641-1.258.143-2.928.143-2.928zm1.237 3.43s-1.44.717-1.835 2.096c-.225.785-.063 1.605.117 2.174-.32-.486-.83-1.092-1.531-1.327-1.242-.416-2.586.502-2.586.502s.669 1.594 1.91 2.01c1.081.362 2.186-.256 2.468-.43.554.643 1.923 1.37 1.923 1.37 3.831.873 3.128-1.142 3.128-1.142s-2.875-.532-3.722-1.356c.22-.282.417-.613.529-1.001.395-1.378-.401-2.897-.401-2.897z"
          fill={color}
        />
      </Svg>
    </View>
  );
}

export function RightArrow({color = colorRef, props}) {
  return (
    <View style={[styles.view, props]}>
      <Svg height="100%" width="100%" viewBox="0 0 12 19 ">
        <Path d="M3 15.002l6-6-6-6" stroke={color} strokeWidth={2} />
      </Svg>
    </View>
  );
}

export function RatingArrow({color = colorRef, props}) {
  return (
    <View style={[styles.view, props]}>
      <Svg height="100%" width="100%" viewBox="0 0 10 5 ">
        <Path
          d="M2.414 1L5 3.586 7.586 1H2.414z"
          fill={color}
          stroke={color}
          strokeWidth={2}
        />
      </Svg>
    </View>
  );
}

export function FiltersSvg({color = colorRef, props}) {
  return (
    <View style={[styles.view, props]}>
      <Svg height="100%" width="100%" viewBox="0 0 22 18.5 ">
        <Path
          stroke={color}
          strokeWidth={1.5}
          d="M0 3.25h22M0 10.25h22M0 17.25h22"
        />
        <Circle
          cx={17.125}
          cy={3.125}
          r={2.125}
          fill={color}
          stroke={color}
          strokeWidth={1.5}
        />
        <Circle
          cx={5.125}
          cy={10.125}
          r={2.125}
          fill={color}
          stroke={color}
          strokeWidth={1.5}
        />
        <Circle
          cx={14.125}
          cy={17.125}
          r={2.125}
          fill={color}
          stroke={color}
          strokeWidth={1.5}
        />
      </Svg>
    </View>
  );
}
